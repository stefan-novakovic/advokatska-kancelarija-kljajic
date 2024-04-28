package advokatska.kancelarija.kljajic.mail.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record SendMailRequestDto(
        @Size(min = 2, max = 30)
        String firstName,
        @Size(min = 2, max = 50)
        String lastName,
        @Email
        String email,
        @Size(max = 15)
        String currentDate,
        @NotBlank @Size(max = 100)
        String subject,
        @NotBlank @Size(max = 5_000)
        String message) {
}
