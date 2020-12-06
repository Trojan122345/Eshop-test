package cz.osu.ooprproj.model.repositories;

import cz.osu.ooprproj.model.db.ProductTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductTypesRepository extends JpaRepository<ProductTypeEntity, Integer> {
}
