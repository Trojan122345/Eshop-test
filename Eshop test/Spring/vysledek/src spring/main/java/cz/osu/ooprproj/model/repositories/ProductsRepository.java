package cz.osu.ooprproj.model.repositories;

import cz.osu.ooprproj.model.db.ProductsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<ProductsEntity, Integer> {
}
