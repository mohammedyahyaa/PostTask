using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PostTaskAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostTaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductItemsController(ApplicationDbContext context)
        {
            _context = context;

        }

        // GET: api/ProductItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductItems>>> GetAllProductItems()
        {
            return await _context.ProductItems.ToListAsync();
        }

        // GET: api/ProductItem/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductItems>> GetProductItem(int id)
        {
            var paymentDetail = await _context.ProductItems.FindAsync(id);

            if (paymentDetail == null)
            {
                return NotFound();
            }

            return paymentDetail;
        }


        // PUT: api/ProductItem/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductItem(int id, ProductItems productItem)
        {
            if (id != productItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(productItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductItems>> PostProductItem(ProductItems productItem)
        {
            _context.ProductItems.Add(productItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductItem", new { id = productItem.Id }, productItem);
        }

        // DELETE: api/PaymentDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductItem(int id)
        {
            var ProductItem = await _context.ProductItems.FindAsync(id);
            if (ProductItem == null)
            {
                return NotFound();
            }

            _context.ProductItems.Remove(ProductItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        private bool ProductItemExists(int id)
        {
            return _context.ProductItems.Any(e => e.Id == id);
        }

    }
}
