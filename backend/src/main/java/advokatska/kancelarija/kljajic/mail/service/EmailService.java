package advokatska.kancelarija.kljajic.mail.service;

public interface EmailService {

    void sendSimpleMessage(String to, String subject, String text);
    void sendSimpleHtmlMessage(String to, String subject, String html);
}
