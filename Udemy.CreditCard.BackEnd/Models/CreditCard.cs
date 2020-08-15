using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Udemy.CreditCard.BackEnd.Models
{
    public class CreditCard
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string CardHolder { get; set; }

        [Required]
        [Column(TypeName = "varchar(16)")]
        public string CardNumber { get; set; }

        [Required]
        [Column(TypeName = "varchar(5)")]
        public string ExpiryDate { get; set; }

        [Required]
        [Column(TypeName = "varchar(3)")]
        public string CVC { get; set; }
    }
}