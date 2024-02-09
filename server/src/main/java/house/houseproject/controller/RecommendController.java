package house.houseproject.controller;

import house.houseproject.Repository.HUserRepository;
import house.houseproject.Repository.LikedRepository;
import house.houseproject.domain.*;
import house.houseproject.dto.RegisteredHouseDto;
import house.houseproject.dto.UserDto;
import house.houseproject.service.RecommendService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Collections;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class RecommendController {


    private final RecommendService recommendService;

    private final LikedRepository likedRepository;

    private final HUserRepository userRepository;


    @GetMapping("/recommend/{id}")
    public ResponseEntity<?> RecommendHouse(@PathVariable int id, @AuthenticationPrincipal UserDetails userDetails) {

        if (userDetails == null) {
            log.error("userDetails == null");
            return new ResponseEntity<>(Map.of("success", false, "message", "로그인 하세요."), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        recommend:

        //  [1]. LIkedHouse 한 것들 중에서 가장 많은 지역구에 대해 조회?????? (
        // 1. 회원 찜한 메물 조회
        // 2. 매물 조회한

        //2. LikedHouse가없으면  이면 자기 주소를 참조해서 해당 위치에 대한 매물만 조회 (해결)


        try {

                HUser user = userRepository.findById(id)
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not found user id : " + id));

                UserDto userDto = UserDto.from(user);

                // 주소에 해당되는 등록된 매물 가져오기
                List<RegisteredHouse> recommendHouses = recommendService.findUserAddress(userDto.getAddress());

                ArrayList<RegisteredHouseDto> registeredHouseList = new ArrayList<>();

                for (RegisteredHouse house : recommendHouses) {
                    RegisteredHouseDto registeredHouseDto = RegisteredHouseDto.from(house);
                    registeredHouseList.add(registeredHouseDto);
                }

                Message message = new Message();
                message.setSuccess(StatusEnum.TRUE);
                message.setRegisteredHouse(registeredHouseList);

                return new ResponseEntity<>(message, HttpStatus.OK);

            } catch(Exception e){
                log.error("Error occurred while fetching recommended properties: {}", e.getMessage());
                return new ResponseEntity<>(Map.of("success", false, "message", "추천 매물을 불러오는 중에 오류가 발생했습니다."), HttpStatus.INTERNAL_SERVER_ERROR);
            }

        }



}
