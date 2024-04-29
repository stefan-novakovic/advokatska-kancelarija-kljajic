package advokatska.kancelarija.kljajic.mail.service.impl;

import advokatska.kancelarija.kljajic.mail.dto.SendMailRequestDto;
import advokatska.kancelarija.kljajic.mail.service.ContactUsService;
import advokatska.kancelarija.kljajic.mail.service.EmailService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.apache.commons.text.StringSubstitutor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DefaultContactUsService implements ContactUsService {

    @Value("${mail.recipients}")
    private final Set<String> recipientsEmail;
    private final EmailService emailService;
    private final ResourceLoader resourceLoader;

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
        Resource resource = resourceLoader.getResource("classpath:templates/contactUsTemplate.html");
        try (InputStream inputStream = resource.getInputStream();
             BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
            return reader.lines().collect(Collectors.joining(System.lineSeparator()));
        }
    }
}
