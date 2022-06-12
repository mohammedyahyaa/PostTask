using System.ComponentModel.DataAnnotations;

namespace PostTaskAPI.Models
{
    public class ProductItems
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public int Size { get; set; }
        public string Image { get; set; }
       
        
    }
}
