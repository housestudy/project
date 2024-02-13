package house.houseproject.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import house.houseproject.domain.RegisteredHouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RegisteredHouseRepository extends JpaRepository<RegisteredHouse, Integer> {
    Optional<RegisteredHouse> findByRegisteredHouseId(int registeredHouseId);

    boolean existsByRegisteredHouseIdAndUserId(int registeredHouseId, int userId);

    @Query("SELECT rh FROM RegisteredHouse rh WHERE rh.sgg_nm = :sggNm")
    Page<RegisteredHouse> findBySggNm(String sggNm, Pageable pageable);

    
}
