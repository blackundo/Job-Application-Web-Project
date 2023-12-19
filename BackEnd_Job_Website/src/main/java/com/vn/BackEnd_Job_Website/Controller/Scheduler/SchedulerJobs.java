package com.vn.BackEnd_Job_Website.Controller.Scheduler;
import com.vn.BackEnd_Job_Website.Model.Hiring;
import com.vn.BackEnd_Job_Website.Respository.HiringRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.util.List;


@Component
@Slf4j
public class SchedulerJobs {

    @Autowired
    private HiringRepository hiringRepository;

    @Scheduled(cron = "0 0 */2 * * *")
    public void scheduleJob(){
        LocalDate localDate = LocalDate.now();
        List<Hiring> openHiringList = hiringRepository.findByStatus("Open");
        for (Hiring hiring : openHiringList) {
            LocalDate dateEnd = hiring.getDateEnd();
            if (dateEnd != null && dateEnd.isBefore(localDate)) {
                hiring.setStatus("Close");
                hiringRepository.save(hiring);
                log.info("Updated Hiring with ID {} to status Close", hiring.getId());
            }
        }

        System.out.println("Scheduling job " + localDate);
    }


}

