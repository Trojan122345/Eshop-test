package cz.osu.ooprproj.model.vm;

import java.sql.Date;
import java.time.LocalDate;
import java.time.ZoneId;

public class DateConverter {
    public static LocalDate convertDateSQLToLocalDate(Date date) {
        return date.toLocalDate();
    }

    public static Date convertLocalDateToDateSQL(LocalDate localDate) {
        return Date.valueOf(localDate);
    }
}
