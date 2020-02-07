package cz.osu.ooprproj.model.repositories;

import cz.osu.ooprproj.model.db.OrdersProductsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersProductsRepository extends JpaRepository<OrdersProductsEntity, Integer> {
}
