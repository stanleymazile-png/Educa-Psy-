// Contenu corrigé / renforcé de script.js
// Changements principaux :
// - Ajout de clés manquantes pour correspondre aux data-key dans index.html
// - Gardes ajoutées avant l'utilisation d'éléments DOM (submitBtn, donation elements, etc.)
// - Aucun changement structurel majeur

const translations = {
    'fr': {
        'nav_home': 'Accueil', 'nav_about': 'A Propos', 'nav_act': 'Services', 'nav_contact': 'Contact',
        'hero_title_1': 'Qui sommes-nous ?', 'hero_title_2': '',
        // Compatibilité : clé utilisée dans index.html
        'hero_title_main': 'Qui sommes-nous ?',
        'hero_desc': "Educa-Psy est une entreprise sociale de services psychologiques et éducatifs aux écoles haïtiennes, aux institutions et aux organisations.",
        'mission_statement': "Accompagner nos partenaires et les communautés vers une éducation de qualité, le bien-être et le développement durable.",
        'dom_1': 'Santé Mentale', 'dom_2': 'Éducation', 'dom_3': 'Mentorat',
        'form_name': 'Votre Nom', 'form_email': 'Votre Email', 'form_message': 'Votre Message', 'form_send': 'Envoyer',
        'form_sending': 'Envoi en cours...',
        'form_success_title': '✓ Message envoyé avec succès !',
        'form_success_desc': 'Nous vous contacterons bientôt. Un email de confirmation a été envoyé à votre adresse.',
        'form_error_generic': 'Une erreur s\'est produite. Veuillez réessayer.',
        'form_error_network': 'Erreur réseau. Veuillez réessayer.',
        'slide_status_title': 'Statut',
        'slide_status_content': "SNC soutenue par l'AUF via le programme RéSACE.",
        'slide_creation_date_title': 'Date de création',
        'slide_creation_date_content': 'Décembre 2022.',
        'slide_headquarters_title': 'Siège social',
        'slide_headquarters_content': "Région des Palmes, Grand-Goâve (Fauché).",
        'slide_core_business_title': 'Cœur de métier',
        'slide_core_business_content': 'Santé mentale et éducation.',
        'slide_vision_mission_title': 'Vision et Mission',
        'slide_vision_mission_content': "Offrir des services psychologiques et pédagogiques pour le bien-être de tous.",
        'slide_school_environment_title': "Milieu Scolaire",
        'slide_school_environment_content': 'Soutien psychologique et pédagogique innovant pour élèves, parents et professeurs.',
        'slide_womens_rights_title': "Droits des Femmes",
        'slide_womens_rights_content': "Éducation à la Santé Sexuelle et Reproductive (DSSR) et lutte contre les VBG.",
        'slide_services_offered_title': 'Services Proposés',
        'slide_services_offered_content': "Consultations, bilans psychologiques, coaching, matériel pédagogique, groupes de parole.",
        'slide_strengths_assets_title': 'Forces et Atouts',
        'slide_strengths_assets_content': "Professionnels experts et approche innovante (art-thérapie, recyclage, jeux d'esprit).",
        'slide_challenges_title': 'Défis',
        'slide_challenges_content': "Insécurité, stigmatisation de la santé mentale et diversification des financements.",
        'slide_summary_title': 'En Résumé',
        'slide_summary_content': "Educa-Psy : l'accompagnement psychologique, l'art et l'empowerment au service du développement.",
        'histoire_title': 'Histoire',
        'histoire_content': "Educa-Psy est fondée en 2022 avec le soutien de l’Agence Universitaire de la Francophonie, AUF Caraïbes, dans le cadre du programme RéSACE, Réseau Solidaire d’[...]",
        // Clés pour la zone de donation (présentes dans index.html)
        'donate_title': 'Soutenez Notre Mission',
        'donate_desc': 'Votre don nous permet de continuer à agir.',
        'donate_secure': 'Les paiements sont traités de manière sécurisée.',
        'donate_success_title': 'Merci pour votre don !',
        'donate_success_desc': 'Votre générosité fait la différence.'
    },
    'ht': {
        'nav_home': 'Akey', 'nav_about': 'Prezantasyon', 'nav_act': 'Sèvis', 'nav_contact': 'Kontak',
        'hero_title_1': 'Kiyès nou ye ?', 'hero_title_2': '',
        'hero_title_main': 'Kiyès nou ye ?',
        'hero_desc': 'Educa-Psy se yon antrepriz sosyal ki ofri sèvis sikolojik ak edikatif pou lekòl ayisyen, enstitisyon ak òganizasyon.',
        'mission_statement': 'Akònpanye patnè nou yo ak lòt estrikti nan direksyon yon edikasyon kalite, byennèt ak devlopman dirab.',
        'dom_1': 'Sante Mantal', 'dom_2': 'Edikasyon', 'dom_3': 'Mantora',
        'form_name': 'Non ou', 'form_email': 'Imèl ou', 'form_message': 'Mesaj ou', 'form_send': 'Voye',
        'form_sending': 'Voye...',
        'form_success_title': '✓ Mesaj la voye byen vit !',
        'form_success_desc': 'N ap kontakte ou byento. Yo voye yon imèl konfimasyon nan adrès ou.',
        'form_error_generic': 'Yon erè te fèt. Tanpri eseye ankò.',
        'form_error_network': 'Erè rezo. Tanpri eseye ankò.',
        'slide_status_title': 'Estati',
        'slide_status_content': 'SNC ki gen sipò AUF atravè pwogram RéSACE.',
        'slide_creation_date_title': 'Dat kreyasyon',
        'slide_creation_date_content': 'Desanm 2022.',
        'slide_headquarters_title': 'Syèj sosyal',
        'slide_headquarters_content': 'Rejyon Palmes, Grand-Goâve (Fauché).',
        'slide_core_business_title': 'Kè metye',
        'slide_core_business_content': 'Sante mantal ak edikasyon.',
        'slide_vision_mission_title': 'Vizyon ak Misyon',
        'slide_vision_mission_content': 'Ofri sèvis sikolojik ak pedagojik pou byennèt tout moun.',
        'slide_school_environment_title': 'Anviwònman Lekòl',
        'slide_school_environment_content': 'Sipò sikolojik ak pedagojik inovatif pou elèv, paran ak pwofesè.',
        'slide_womens_rights_title': 'Dwa Fanm',
        'slide_womens_rights_content': 'Edikasyon sou Sante Seksyèl ak Repwodiktif (DSSR) ak lit kont VBG.',
        'slide_services_offered_title': 'Sèvis yo Ofri',
        'slide_services_offered_content': 'Konsiltasyon, bilan sikolojik, coaching, materyèl pedagojik, gwoup pawòl.',
        'slide_strengths_assets_title': 'Fòs ak Atou',
        'slide_strengths_assets_content': 'Pwofesyonèl ekspè ak apwòch inovatif (terapi-atizay, resiklaj, jwèt lespri).',
        'slide_challenges_title': 'Defi yo',
        'slide_challenges_content': 'Ensekirite, stigmatizasyon sante mantal, ak divèsifikasyon finansman.',
        'slide_summary_title': 'An Rezime',
        'slide_summary_content': 'Educa-Psy: akonpayman sikolojik, atizay ak otonòmizasyon kòm zouti devlopman.',
        'histoire_title': 'Istwa',
        'histoire_content': "Educa-Psy te fonde an 2022 avèk sipò Ajans Inivèsitè Frankofoni, AUF Karayib, nan kad pwogram RéSACE, Rezo Solidè pou Akonpayman Kreyasyon Antrepriz. Depi lè sa[...]",
        'donate_title': 'Soutni Misyon Nou',
        'donate_desc': 'Don ou pèmèt nou kontinye aji.',
        'donate_secure': 'Peman yo trete avèk sekirite.',
        'donate_success_title': 'Mèsi pou don ou!',
        'donate_success_desc': 'Jenewozite ou fè diferans la.'
    },
    'en': {
        'nav_home': 'Home', 'nav_about': 'About Us', 'nav_act': 'Services', 'nav_contact': 'Contact',
        'hero_title_1': 'Who are we?', 'hero_title_2': '',
        'hero_title_main': 'Who are we?',
        'hero_desc': 'Educa-Psy is a social enterprise providing psychological and educational services to Haitian schools, institutions, and organizations.',
        'mission_statement': 'Supporting our partners and other structures towards quality education, well-being, and sustainable development.',
        'dom_1': 'Mental Health', 'dom_2': 'Education', 'dom_3': 'Mentoring',
        'form_name': 'Your Name', 'form_email': 'Your Email', 'form_message': 'Your Message', 'form_send': 'Send',
        'form_sending': 'Sending...',
        'form_success_title': '✓ Message sent successfully!',
        'form_success_desc': 'We will contact you soon. A confirmation email has been sent to your address.',
        'form_error_generic': 'An error occurred. Please try again.',
        'form_error_network': 'Network error. Please try again.',
        'slide_status_title': 'Status',
        'slide_status_content': 'A General Partnership (SNC) supported by AUF through the RéSACE program.',
        'slide_creation_date_title': 'Creation Date',
        'slide_creation_date_content': 'December 2022.',
        'slide_headquarters_title': 'Headquarters',
        'slide_headquarters_content': 'Palmes region, Grand-Goâve (Fauché).',
        'slide_core_business_title': 'Core Business',
        'slide_core_business_content': 'Mental health and education.',
        'slide_vision_mission_title': 'Vision and Mission',
        'slide_vision_mission_content': 'Providing psychological and educational services for the well-being of all.',
        'slide_school_environment_title': 'School Environment',
        'slide_school_environment_content': 'Innovative psychological and educational support for students, parents, and teachers.',
        'slide_womens_rights_title': "Women's Rights",'
        'slide_womens_rights_content': 'Sexual and Reproductive Health (SRH) education and advocacy against GBV.',
        'slide_services_offered_title': 'Services Offered',
        'slide_services_offered_content': 'Consultations, psychological assessments, coaching, educational materials, and support groups.',
        'slide_strengths_assets_title': 'Strengths and Assets',
        'slide_strengths_assets_content': 'Expert professionals with an innovative approach (art therapy, recycling, and mind games).',
        'slide_challenges_title': 'Challenges',
        'slide_challenges_content': 'Insecurity, mental health stigma, and diversifying funding.',
        'slide_summary_title': 'In Summary',
        'slide_summary_content': 'Educa-Psy: using psychological support, art, and empowerment as tools for development.',
        'histoire_title': 'History',
        'histoire_content': "Educa-Psy was founded in 2022 with the support of the Agence Universitaire de la Francophonie, AUF Caribbean, as part of the RéSACE program, a Solidarity Network for[...]",
        'donate_title': 'Support Our Mission',
        'donate_desc': 'Your donation helps us continue our work.',
        'donate_secure': 'Payments are handled securely.',
        'donate_success_title': 'Thank you for your donation!',
        'donate_success_desc': 'Your generosity makes a difference.'
    }
};

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

function setLanguage(lang) {
    localStorage.setItem('educaLang', lang);
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.style.opacity = '0';
            setTimeout(() => {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
                el.style.opacity = '1';
            }, 150);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('educaLang') || 'fr';
    setLanguage(savedLang);

    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const lang = localStorage.getItem('educaLang') || 'fr';

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (contactForm.action.includes('VOTRE_ID')) {
                alert("Veuillez configurer votre ID Formspree dans le code HTML.");
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                const span = submitBtn.querySelector('span');
                if (span) span.textContent = translations[lang]['form_sending'];
            }

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    contactForm.classList.add('hidden');
                    const successMsg = document.getElementById('success-msg');
                    if (successMsg) successMsg.classList.remove('hidden');
                } else {
                    const data = await response.json();
                    let errorMessage = translations[lang]['form_error_generic'];
                    if (data && data.errors) {
                        errorMessage = data.errors.map(error => error.message).join('\n');
                    }
                    alert(errorMessage);
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        const span = submitBtn.querySelector('span');
                        if (span) span.textContent = translations[lang]['form_send'];
                    }
                }
            } catch (err) {
                alert(translations[lang]['form_error_network']);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    const span = submitBtn.querySelector('span');
                    if (span) span.textContent = translations[lang]['form_send'];
                }
            }
        });
    }

    // Swiper init (inchangé)
    try {
        const identityBookSwiper = new Swiper('.identity-book', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoHeight: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 1000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } catch (e) {
        console.warn('Swiper init failed or Swiper not loaded:', e);
    }
});
