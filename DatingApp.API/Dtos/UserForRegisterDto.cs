using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 3, ErrorMessage = "You must specify password between 4 and 8")]
        public string Password { get; set; }
    }
}