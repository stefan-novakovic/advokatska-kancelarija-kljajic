package advokatska.kancelarija.kljajic.mail.service.impl;

import advokatska.kancelarija.kljajic.mail.dto.SendMailRequestDto;
import advokatska.kancelarija.kljajic.mail.service.ContactUsService;
import advokatska.kancelarija.kljajic.mail.service.EmailService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.util.Set;

@RequiredArgsConstructor
@Service
public class DefaultContactUsService implements ContactUsService {

    @Value("${mail.recipients}")
    private final Set<String> recipientsEmail;
    private final EmailService emailService;
    private final SpringTemplateEngine templateEngine;

    @Override
    public void contactUs(@NonNull SendMailRequestDto request) {
        for (String recipientEmail : recipientsEmail) {
            emailService.sendSimpleHtmlMessage(recipientEmail, request.subject(), generateEmailHtml(request));
        }
    }

    private String generateEmailHtml(@NonNull SendMailRequestDto request) {
        final Context context = new Context();

        context.setVariable("email",       request.email());
        context.setVariable("subject",     request.subject());
        context.setVariable("message",     request.message().replace("\n", "<br/>"));
        context.setVariable("firstName",   request.firstName());
        context.setVariable("lastName",    request.lastName());
        context.setVariable("companyName", request.companyName());
        context.setVariable("companyUrl",  request.companyUrl());
        context.setVariable("phoneNumber", request.phoneNumber());

        return templateEngine.process("contactUsTemplate", context);
    }
}
