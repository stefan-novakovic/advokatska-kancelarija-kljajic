package advokatska.kancelarija.kljajic.mail.controller;

import advokatska.kancelarija.kljajic.mail.dto.SendMailRequestDto;
import advokatska.kancelarija.kljajic.mail.service.ContactUsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/email")
public class EmailController {

    private final ContactUsService contactUsService;

    @PostMapping("/contact-us")
    public void sendContactMail(@RequestBody @Valid SendMailRequestDto request) {
        contactUsService.contactUs(request);
    }
}
