package house.houseproject.service;

import java.util.Collections;
import house.houseproject.Repository.HUserRepository;
import house.houseproject.domain.HUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;


@Component("userDetailsService")
public class HUserDetailsService implements UserDetailsService {
    private final HUserRepository userRepository;

    public HUserDetailsService(HUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(final String email) {
        return userRepository.findOneWithAuthoritiesByEmail(email)
                .map(user -> createUser(email, user))
                .orElseThrow(() -> new UsernameNotFoundException(email + " -> 데이터베이스에서 찾을 수 없습니다."));
    }

    private org.springframework.security.core.userdetails.User createUser(String username, HUser user) {
        List<GrantedAuthority> grantedAuthorities = Collections.singletonList(
                new SimpleGrantedAuthority("ROLE_" + user.getAuthority().toString())
        );

        return new org.springframework.security.core.userdetails.User(user.getEmail(),
                user.getPassword(),
                grantedAuthorities);
    }
}
