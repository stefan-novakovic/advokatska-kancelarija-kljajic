package advokatska.kancelarija.kljajic.mail.service;

import advokatska.kancelarija.kljajic.mail.dto.SendMailRequestDto;

public interface ContactUsService {

    void contactUs(SendMailRequestDto request);
}
