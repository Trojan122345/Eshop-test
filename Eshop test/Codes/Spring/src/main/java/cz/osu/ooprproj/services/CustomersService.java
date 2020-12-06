package cz.osu.ooprproj.services;

import cz.osu.ooprproj.model.db.CustomersEntity;
import cz.osu.ooprproj.model.repositories.CustomersRepository;
import cz.osu.ooprproj.model.vm.CustomersVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomersService {
    private final CustomersRepository customersRepository;

    public CustomersService(@Autowired CustomersRepository customersRepository) {
        this.customersRepository = customersRepository;
    }

    public CustomersEntity create(CustomersVM customer, String rawPassword) {
        CustomersEntity ret = new CustomersEntity();

        ret.setSurname(customer.getSurname());
        ret.setName(customer.getName());
        ret.setEmail(customer.getEmail());
        ret.setUsername(customer.getUsername());
        ret.setPasswordhash(hashPassword(rawPassword));
        ret.setIsadmin(false);

        this.customersRepository.save(ret);
        return ret;
    }

    public static String hashPassword(String rawPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String passwordhash = encoder.encode(rawPassword);
        return passwordhash;
    }

    public CustomersEntity getByID(int customersID) {
        Optional<CustomersEntity> tmp = this.customersRepository.findById(customersID);
        if (tmp.isPresent())
            return tmp.get();
        else
            throw new RuntimeException("Customer with ID " + customersID + " could not be found.");
    }

    public CustomersEntity getByUsername(String username) {
        Optional<CustomersEntity> ret = this.list().stream().filter(c -> c.getUsername().equals(username)).findFirst();
        if (ret.isPresent())
            return ret.get();
        else
            return null;
    }

    public List<CustomersEntity> list() {
        List<CustomersEntity> ret = this.customersRepository.findAll();
        return ret;
    }

    public void update(CustomersEntity entity) {
        CustomersEntity dbItem = this.customersRepository.getOne(entity.getId());

        dbItem.setName(entity.getName());
        dbItem.setSurname(entity.getSurname());
        dbItem.setEmail(entity.getEmail());
        dbItem.setUsername(entity.getUsername());
        dbItem.setPasswordhash(entity.getPasswordhash());
        dbItem.setIsadmin(entity.getIsadmin());

        this.customersRepository.save(dbItem);
    }

    public void delete(CustomersEntity entity) {
        this.customersRepository.delete(entity);
    }
}
