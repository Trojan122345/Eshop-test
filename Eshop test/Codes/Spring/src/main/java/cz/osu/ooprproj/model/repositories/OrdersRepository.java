package cz.osu.ooprproj.model.repositories;

import cz.osu.ooprproj.model.db.OrdersEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrdersRepository extends JpaRepository<OrdersEntity, Integer> {

}
