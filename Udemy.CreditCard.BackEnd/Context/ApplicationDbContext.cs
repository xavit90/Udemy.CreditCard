using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Udemy.CreditCard.BackEnd.Context
{
    /// <summary>
    /// Contexto para las transacciones con la bd
    /// </summary>
    public class ApplicationDbContext : DbContext
    {
        // Se crea constructor que recibe como parametro la cadena de conexión como inyección de dependencia
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options)
        {

        }

        //Se crea la propiedad con el nombre de la bd para su construcción  
        public DbSet<Models.CreditCard> CreditCards { get; set; }
    }
}
