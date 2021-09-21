package www.commerce.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="catalogs")
public class Catalog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 255, nullable = false)
    private String name;

    @OneToMany(mappedBy="catalog", cascade = CascadeType.ALL, orphanRemoval = true)//, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Category> categories;

    @OneToOne //(cascade = CascadeType.ALL)
    @JoinColumn(name = "catalog_images_id", referencedColumnName = "id")
    private Catalog_Images image;


    public Catalog() {
        this.categories = new ArrayList<>();
    }

    public Catalog(String name) {
        this.name = name;
        this.categories = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    public Catalog_Images getImage() {
        return image;
    }

    public void setImage(Catalog_Images image) {
        this.image = image;
    }
}
