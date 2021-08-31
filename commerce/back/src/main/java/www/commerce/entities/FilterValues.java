package www.commerce.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@AllArgsConstructor
//@NoArgsConstructor
@ToString
@Table(name="tblFilterValues")
public class FilterValues {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 255, nullable = false)
    private String name;

    private boolean IsDeleted;

    private boolean IsAdmin;

    @CreatedDate
    private LocalDateTime createdAt;

    private int FilterNameId;


    public FilterValues() {

    }
}
