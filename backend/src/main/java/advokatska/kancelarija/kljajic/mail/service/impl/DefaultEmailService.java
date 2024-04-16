package advokatska.kancelarija.kljajic.mail.service.impl;

import advokatska.kancelarija.kljajic.mail.service.EmailService;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class DefaultEmailService implements EmailService {

    @Value("${spring.mail.username}")
    private final String senderEmail;
    private final JavaMailSender emailSender;

    @Override
    public void sendSimpleMessage(String to, String subject, String text) {
        final SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(senderEmail);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        emailSender.send(message);
    }

    @SneakyThrows
    @Override
    public void sendSimpleHtmlMessage(String to, String subject, String html) {
        final MimeMessage message = emailSender.createMimeMessage();
        final MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(senderEmail);
        helper.setTo(to);
        helper.setSubject(subject);

        helper.setText(html);
        helper.getMimeMessage().setContent(html, "text/html; charset=utf-8");

        emailSender.send(message);
    }
}
