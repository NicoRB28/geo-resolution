package com.resolution.geo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.function.Predicate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.resolution.geo.model.Location;
import com.resolution.geo.repository.LocationRepository;
import com.resolution.geo.service.LocationService;
import com.resolution.geo.service.impl.LocationServiceImpl;

@SpringBootTest
class GeoApplicationTests {
	
	@InjectMocks
	private LocationService locationService = new LocationServiceImpl();
	
	@Mock
	private LocationRepository locationRepository;
	
	@Mock
	private Location cipolletti;
	
	@BeforeEach
	void init() {
		when(cipolletti.getCity()).thenReturn("Cipolletti");
		when(cipolletti.getCountry()).thenReturn("Argentina");
		when(cipolletti.getLat()).thenReturn("-1234");
		when(cipolletti.getLng()).thenReturn("-4321");
		when(locationRepository.findByLatAndLng("-1234", "-4321")).thenReturn(Optional.of(cipolletti));
		when(locationRepository.findByLatAndLng("-222", "-111")).thenReturn(Optional.empty());
	}
	
	@Test
	public void testGetLocationByPosition() {
		Predicate<Location> countryIsArgentina = location -> "Argentina".equals(location.getCountry());
		Predicate<Location> cityIsCipolletti = location -> "Cipolletti".equals(location.getCity());
		Predicate<Location> latIsCorrect = location -> "-1234".equals(location.getLat());
		Predicate<Location> lngIsCorrect = location -> "-4321".equals(location.getLng());
		
		Location cipolletti = this.locationService.getLocationByPosition("-1234","-4321");
		
		assertTrue(countryIsArgentina.test(cipolletti));
		assertTrue(cityIsCipolletti.test(cipolletti));
		assertTrue(latIsCorrect.test(cipolletti));
		assertTrue(lngIsCorrect.test(cipolletti));
		
		Throwable exception = assertThrows(RuntimeException.class, () -> this.locationService.getLocationByPosition("-222", "-111"));
		
		assertEquals("Position Latitude: -222 Longitude: -111 Not Found",exception.getMessage());
		
	}

}
