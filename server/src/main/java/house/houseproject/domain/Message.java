package house.houseproject.domain;


import com.fasterxml.jackson.annotation.JsonInclude;
import house.houseproject.dto.RegisteredHouseDto;
import house.houseproject.dto.UserUpdateDto;
import lombok.Data;

import house.houseproject.dto.LoginDto;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Message {


    private StatusEnum success;
    private String message;
    private Object data;
    private String token;

    private Object user;
    private UserUpdateDto updateUser;

    private Long totalCount;
    private Integer registeredHouseId;

    private ArrayList<RegisteredHouseDto> registeredHouse;
    private List<RegisteredHouseDto> registeredHouses;
    private RegisteredHouseDto registeredHouseDto;
    private StatusEnum isLiked;

    private Integer price;
    private Map<String, Integer> pastList;
    private Map<String, Object> status;

    public Message(UserUpdateDto updateUser, String message) {

        this.updateUser = updateUser;
        this.message = message;
    }




    public Message(String token, LoginDto user, boolean success) {
        this.token = token;
        this.user = user;
        this.success = StatusEnum.BAD_REQUEST;
    }


    public Message(String token, LoginDto user, boolean success,String message) {
        this.token = token;
        this.user = user;
        this.success = StatusEnum.BAD_REQUEST;
        this.message = message;
    }

    public Message(int registeredHouseId, boolean success) {
        this.registeredHouseId = registeredHouseId;
        this.success = StatusEnum.BAD_REQUEST;
    }
}

