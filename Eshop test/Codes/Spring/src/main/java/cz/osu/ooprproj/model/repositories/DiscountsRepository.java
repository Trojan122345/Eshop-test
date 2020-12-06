package cz.osu.ooprproj.model.repositories;

import cz.osu.ooprproj.model.db.DiscountsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscountsRepository extends JpaRepository<DiscountsEntity, Integer> {
}
