import React from 'react';

const Contact = () => {
    const addresses = [
        "Head Office: 61 Bergrivier Drive, Terenure, Kempton Park, 1619",
        "Branch: 10074 Ditloung, Lephalele",
        "Branch: 902 Makgodu, Moletji, Polokwane",
        "Branch: 19 Sagittarius Avenue, Witbank",
        "Branch: 8989 Tamboville, Pretoria"
    ];

    const attachments = [
        "Valid Tax Pin Certificate",
        "Valid BBBEE Certificate",
        "Director's I.D Copy",
        "Company Certificate",
        "CSD Registered",
        "CIBD registered",
        "ECB registered",
        "Wireman's Licence",
        "Letter of Good Standing"
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <div className="contact-details">
                            <p><strong>Director:</strong> Stanley Mashita</p>
                            <p><strong>Contact No:</strong> 083 736 0290</p>
                            <p><strong>Email:</strong> info@stanhole.co.za</p>
                            <p><strong>REG NO:</strong> 2014/078224/07</p>
                            <p><strong>VAT:</strong> 4800292320</p>
                        </div>

                        <h4>Our Locations</h4>
                        <ul className="address-list">
                            {addresses.map((address, index) => (
                                <li key={index}>{address}</li>
                            ))}
                        </ul>

                    </div>

                    <div className="contact-form">

                        <div className="attachments-section">
                            <h4 className='attatchment-header'>Available Documents</h4>
                            <div className="attachments-grid">
                                {attachments.map((attachment, index) => (
                                    <div key={index} className="attachment-item">
                                        {attachment}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <div className="map-section">
                        {/* Head Office */}
                        <div className="map-card-wrapper">
                            <div className="map-title">Head Office</div>
                            <div className="map-card head-office">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8356648619824!2d28.19729317458728!3d-26.071626577158487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956caecd747df5%3A0xf0878a928fef1f4e!2s61%20Bergrivier%20Dr%2C%20Terenure%2C%20Johannesburg%2C%201619!5e0!3m2!1sen!2sza!4v1759193027873!5m2!1sen!2sza"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>


                        {/* Branch Offices */}
                        <div className="branch-maps">
                            <div className="map-card-wrapper">
                                <div className="map-title">Branch 1 <br /> 10074 Ditloung, <br /> Lephalele </div>
                                <div className="map-card branch-office">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14645.346911728968!2d28.02944050447194!3d-23.41220036636504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb849477f59be05%3A0x8d1967336de2931a!2sDitloung!5e0!3m2!1sen!2sza!4v1759193358919!5m2!1sen!2sza"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className="map-card-wrapper">
                                <div className="map-title">Branch 2 <br />902 Makgodu, <br /> Moletji, Polokwane </div>
                                <div className="map-card branch-office">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29286.015098624037!2d29.429758013462003!3d-23.433328262250967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6ff0037176e67%3A0x962a6fba23a3503b!2sMakgodu!5e0!3m2!1sen!2sza!4v1759193604322!5m2!1sen!2sza"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className="map-card-wrapper">
                                <div className="map-title">Branch 3 <br />19 Sagittarius Avenue,<br />Witbank</div>
                                <div className="map-card branch-office">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.7238413652253!2d29.26526537458069!3d-25.911447377258117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaf2486dca8f27%3A0xb90142b50de18013!2s19%20Sagittarius%20Ave%2C%20Reyno%20Ridge%2C%20eMalahleni%2C%201049!5e0!3m2!1sen!2sza!4v1759194040549!5m2!1sen!2sza"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className="map-card-wrapper">
                                <div className="map-title">Branch 4<br />8989 Tamboville, <br />Pretoria</div>
                                <div className="map-card branch-office">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14315.776774869179!2d28.28390281457492!3d-26.23100277172784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9522ab2874e4b7%3A0x612ef5279aeb571b!2sTamboville%2C%20Brakpan%2C%201516!5e0!3m2!1sen!2sza!4v1759194135407!5m2!1sen!2sza"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;