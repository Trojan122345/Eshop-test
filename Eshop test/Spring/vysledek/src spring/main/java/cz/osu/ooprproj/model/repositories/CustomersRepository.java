package cz.osu.ooprproj.model.repositories;

import cz.osu.ooprproj.model.db.CustomersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomersRepository extends JpaRepository<CustomersEntity, Integer> {
}
