package advokatska.kancelarija.kljajic.mail.service.impl;

import advokatska.kancelarija.kljajic.mail.dto.SendMailRequestDto;
import advokatska.kancelarija.kljajic.mail.service.ContactUsService;
import advokatska.kancelarija.kljajic.mail.service.EmailService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.apache.commons.text.StringSubstitutor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class DefaultContactUsService implements ContactUsService {

    @Value("${mail.recipients}")
    private final Set<String> recipientsEmail;
    private final EmailService emailService;

    @Override
    public void contactUs(@NonNull SendMailRequestDto request) {
        for (String recipientEmail : recipientsEmail) {
            emailService.sendSimpleHtmlMessage(recipientEmail, request.subject(), generateEmailHtml(request));
        }
    }

    private String generateEmailHtml(@NonNull SendMailRequestDto request) {
        final String html = loadContactUsTemplate();
        final Map<String, Object> params = Map.of(
        "email",       request.email(),
        "subject",     request.subject(),
        "message",     request.message().replace("\n", "<br/>"),
        "firstName",   request.firstName(),
        "lastName",    request.lastName(),
        "currentDate", request.currentDate());

        final StringSubstitutor sub = new StringSubstitutor(params);
        return sub.replace(html);
    }

    @SneakyThrows
    private String loadContactUsTemplate() {
        Path path = new ClassPathResource("templates/contactUsTemplate.html").getFile().toPath();
        return Files.readString(path, StandardCharsets.UTF_8);
    }
}
