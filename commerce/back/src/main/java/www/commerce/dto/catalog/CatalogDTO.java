package www.commerce.dto.catalog;

import lombok.Data;
import org.codehaus.jackson.annotate.JsonProperty;
import www.commerce.dto.category.CategoryDTO;
import www.commerce.dto.category.CategorySlimDTO;

import java.util.ArrayList;
import java.util.List;

@Data
public class CatalogDTO {

    @JsonProperty("id")
    private int id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("categories")
    private List<CategorySlimDTO> categories;
    @JsonProperty("image")
    private ImageCatalogDTO image;

    public CatalogDTO(int id, String name, ImageCatalogDTO image) {
        this.id = id;
        this.name = name;
        this.categories = new ArrayList<>();
        this.image = image;
    }

    public CatalogDTO(int id, String name, List<CategorySlimDTO> categories, ImageCatalogDTO image) {
        this.id = id;
        this.name = name;
        this.categories = categories;
        this.image = image;
    }

    public CatalogDTO(String name){
        this.name = name;
        this.categories = new ArrayList<>();

    }

    public CatalogDTO() {
        this.categories = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CategorySlimDTO> getCategories() {
        return categories;
    }

    public void setCategories(List<CategorySlimDTO> categories) {
        this.categories = categories;
    }

    public ImageCatalogDTO getImage() {
        return image;
    }

    public void setImage(ImageCatalogDTO image) {
        this.image = image;
    }
}
