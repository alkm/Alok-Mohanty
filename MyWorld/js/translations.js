'use strict';

/* Services */

angular.module('MyWorld.translations', ['pascalprecht.translate']).
    config(function ($translateProvider) {
        $translateProvider.translations('en', {
            START_OVER: 'Start Over',
            SEARCH: 'Search',
            BUTTON_LANG_EN: 'English',
            BUTTON_LANG_ES: 'Spanish',
            BUTTON_LANG_PR: 'Portuguese',
            CITY: 'City',
            ENTER_ACTIVATION_KEY: 'Enter activation key',
            ACTIVATE: 'Activate',
            RESTART: 'Restart',
            TYPE: 'Type',
            ERROR: 'Error',
            PHOTO_VIEW: 'Photo View',
            MAP_VIEW: 'Map View',
            VIRTUAL_TOUR: 'Virtual Tour',
            PICTURE_GALLERY: 'Picture Gallery',
            EMAIL_THIS: 'Email This!',
            LIST_PRICE: 'List Price',
            REQUEST_MORE_INFORMATION: 'Request more information',
            EMAIL_ME: 'Email me',
            TEXT_ME: 'SMS me',
            NAME: 'Name',
            PHONE_NUMBER: 'Phone Number',
            PRICE: 'Price',
            EMAIL_ADDRESS: 'Email address',
            RENTAL_PRICE: 'Rental Price',
            CELL_PHONE_NUMBER_OPTIONAL: 'Cell phone number (optional)',
            NAME_OPTIONAL: 'Name (optional)',
            CLEAR_FORM: 'Clear Form',
            SUBMIT: 'Submit',
            SUBDIVISION: 'Subdivision',
            TOUCH_HERE: 'Touch here',
            SEARCH_PROPERTIES: 'Buscar Propiedades',
            POPULAR_SEARCHES: 'Popular Searches',
            BEDROOMS: 'Bedrooms',
            BATHROOMS: 'Bathrooms',
            SEARCHING_FOR_HOME: 'RealTSoft is searching for your home...',
            FOR_SALE: 'For Sale',
            FOR_RENT: 'For Rent',
            HOME_BUTTON_SALE_LINE1: '<span class="line-sm">For</span>',
            HOME_BUTTON_SALE_LINE2: '<span class="line-lg">Sale</span>',
            HOME_BUTTON_RENT_LINE1: '<span class="line-sm">For</span>',
            HOME_BUTTON_RENT_LINE2: '<span class="line-lg">Rent</span>',
            HOME_BUTTON_SEARCH_FORM_LINE1: '<span class="line-lg">Search</span>',
            HOME_BUTTON_SEARCH_FORM_LINE2: '<span class="line-sm">the MLS</span>',
            HOME_BUTTON_SAVED_SEARCHES_LINE1: '<span class="line-lg">Popular</span>',
            HOME_BUTTON_SAVED_SEARCHES_LINE2: '<span class="line-sm">Searches</span>',
            HOME_BUTTON_MORTGAGECALC_LINE1: '<span class="line-sm">Mortgage</span>',
            HOME_BUTTON_MORTGAGECALC_LINE2: '<span class="line-lg">Calculator</span>',
            HOME_BUTTON_FIND_BY_TAG_LINE1: '<span class="line-lg">Find Listings</span>',
            HOME_BUTTON_FIND_BY_TAG_LINE2: '<span class="line-sm">by Tag</span>',
            HOME_BUTTON_GALLERY_LINE1: '<span class="line-sm">Photo</span>',
            HOME_BUTTON_GALLERY_LINE2: '<span class="line-lg">Gallery</span>',
            HOME_BUTTON_FEATURED_LINE1: '<span class="line-lg">Featured</span>',
            HOME_BUTTON_FEATURED_LINE2: '<span class="line-sm">Listings</span>',
            HOME_BUTTON_MAP_LINE1: '<span class="line-sm">Interactive</span>',
            HOME_BUTTON_MAP_LINE2: '<span class="line-lg">Map</span>',
            MORTGAGE_CALCULATOR_DISCLAIMER: 'This calculator is for demonstration purposes only and may not reflect actual numbers for your mortgage.',
        });
        $translateProvider.translations('es', {
            START_OVER: 'Empezar de Nuevo',
            SEARCH: 'Buscar',
            BUTTON_LANG_EN: 'Ingles',
            BUTTON_LANG_ES: 'Español',
            BUTTON_LANG_PR: 'Portugués',
            CELL_PHONE_NUMBER_OPTIONAL: 'Número de Teléfono Celular',
            CLEAR_FORM: 'Forma Clara',
            CITY: 'Ciudad',
            ENTER_ACTIVATION_KEY: 'Código de Activación',
            EMAIL_ME: 'Envíeme por correo electrónico',
            EMAIL_ADDRESS: 'Dirección de correo electrónico',
            ACTIVATE: 'Activar',
            RESTART: 'Reanudar',
            LIST_PRICE: 'Precio de Lista',
            PHOTO_VIEW: 'Foto Grande',
            EMAIL_THIS: 'Enviar Mensaje Electrónico',
            POPULAR_SEARCHES: 'Búsqueda Populares',
            REQUEST_MORE_INFORMATION: 'Solicitar más información',
            MAP_VIEW: 'Mapa',
            NAME: 'Nombre',
            NAME_OPTIONAL: 'Nombre Opcional',
            PHONE_NUMBER: 'Número de Teléfono',
            ERROR: 'Falta',
            TYPE: 'Tipo',
            TEXT_ME: 'SMS Enviar',
            PRICE: 'Precio',
            RENTAL_PRICE: 'Precio de Alquiler',
            VIRTUAL_TOUR: 'Visita Virtual',
            PICTURE_GALLERY: 'Galería de Fotos',
            BEDROOMS: 'Dormitorios',
            BATHROOMS: 'Baños',
            FOR_SALE: 'En Venta',
            FOR_RENT: 'En Alquiler',
            HOME_BUTTON_SALE_LINE1: '<span class="line-sm">En</span>',
            HOME_BUTTON_SALE_LINE2: '<span class="line-lg">Venta</span>',
            HOME_BUTTON_RENT_LINE1: '<span class="line-sm">En</span>',
            HOME_BUTTON_RENT_LINE2: '<span class="line-lg">Alquiler</span>',
            HOME_BUTTON_SEARCH_FORM_LINE1: '<span class="line-lg">Buscar</span>',
            HOME_BUTTON_SEARCH_FORM_LINE2: '<span class="line-sm">el MLS</span>',
            HOME_BUTTON_SAVED_SEARCHES_LINE1: '<span class="line-lg">Buscas</span>',
            HOME_BUTTON_SAVED_SEARCHES_LINE2: '<span class="line-sm">Populares</span>',
            HOME_BUTTON_MORTGAGECALC_LINE1: '<span class="line-sm">Calculadora</span>',
            HOME_BUTTON_MORTGAGECALC_LINE2: '<span class="line-lg">de Hipotecas</span>',
            HOME_BUTTON_FIND_BY_TAG_LINE1: '<span class="line-lg">Buscar</span>',
            HOME_BUTTON_FIND_BY_TAG_LINE2: '<span class="line-sm">por Género</span>',
            HOME_BUTTON_GALLERY_LINE1: '<span class="line-sm">Galería de</span>',
            HOME_BUTTON_GALLERY_LINE2: '<span class="line-lg">Fotos</span>',
            HOME_BUTTON_FEATURED_LINE1: '<span class="line-sm">Propiedades</span>',
            HOME_BUTTON_FEATURED_LINE2: '<span class="line-sm">Destacadas</span>',
            HOME_BUTTON_MAP_LINE1: '<span class="line-lg">Mapa</span>',
            HOME_BUTTON_MAP_LINE2: '<span class="line-sm">Interactivo</span>',
            MORTGAGE_CALCULATOR_DISCLAIMER: 'This calculator is for demonstration purposes only and may not reflect actual numbers for your mortgage.',
            SUBDIVISION: 'Subdivisión',
            SUBMIT: 'enviar el formulario',
            TOUCH_HERE: 'Tocar aquí'
        });
        $translateProvider.translations('pr', {
            START_OVER: 'Começar de Novo',
            SEARCH: 'Procurar',
            BUTTON_LANG_EN: 'Inglês',
            BUTTON_LANG_ES: 'Espanhol',
            BUTTON_LANG_PR: 'Português',
            CITY: 'Cidade',
            ENTER_ACTIVATION_KEY: 'Inserir Chave de Ativação',
            ACTIVATE: 'Ativar',
            RESTART: 'Reinicie',
            TYPE: 'Tipo',
            ERROR: 'Erro',
            PHOTO_VIEW: 'Grande Foto',
            MAP_VIEW: 'Mapa',
            LIST_PRICE: 'Preço de Tabela',
            EMAIL_THIS: 'Enviar esta',
            POPULAR_SEARCHES: 'Buscas populares',
            REQUEST_MORE_INFORMATION: 'Solicitar mais Informações',
            NAME: 'Nome',
            NAME_OPTIONAL: 'Nome Opcional',
            PHONE_NUMBER: 'Número de Telefone',
            TEXT_ME: 'SMS me',
            PRICE: 'Preço',
            CELL_PHONE_NUMBER_OPTIONAL: 'Número de Telefone Celular',
            EMAIL_ME: 'enviar e-mail me',
            EMAIL_ADDRESS: 'Endereço de Email',
            CLEAR_FORM: 'Forma Clara',
            RENTAL_PRICE: 'Preço do Aluguel',
            VIRTUAL_TOUR: 'Tour Virtual',
            PICTURE_GALLERY: 'Galeria de Imagens',
            BEDROOMS: 'Quartos',
            BATHROOMS: 'Banheiros',
            FOR_SALE: 'Á Venda',
            FOR_RENT: 'Para Alugar',
            HOME_BUTTON_SALE_LINE1: '<span class="line-sm">Á</span>',
            HOME_BUTTON_SALE_LINE2: '<span class="line-lg">Venda</span>',
            HOME_BUTTON_RENT_LINE1: '<span class="line-sm">Para</span>',
            HOME_BUTTON_RENT_LINE2: '<span class="line-lg">Alugar</span>',
            HOME_BUTTON_SEARCH_FORM_LINE1: '<span class="line-lg">Buscar</span>',
            HOME_BUTTON_SEARCH_FORM_LINE2: '<span class="line-sm">el MLS</span>',
            HOME_BUTTON_SAVED_SEARCHES_LINE1: '<span class="line-lg">Buscas</span>',
            HOME_BUTTON_SAVED_SEARCHES_LINE2: '<span class="line-sm">Populares</span>',
            HOME_BUTTON_MORTGAGECALC_LINE1: '<span class="line-sm">Calculadora</span>',
            HOME_BUTTON_MORTGAGECALC_LINE2: '<span class="line-lg">de Hipoteca</span>',
            HOME_BUTTON_FIND_BY_TAG_LINE1: '<span class="line-lg">Find Listings</span>',
            HOME_BUTTON_FIND_BY_TAG_LINE2: '<span class="line-sm">by Tag</span>',
            HOME_BUTTON_GALLERY_LINE1: '<span class="line-sm">Photo</span>',
            HOME_BUTTON_GALLERY_LINE2: '<span class="line-lg">Gallery</span>',
            HOME_BUTTON_FEATURED_LINE1: '<span class="line-lg">Featured</span>',
            HOME_BUTTON_FEATURED_LINE2: '<span class="line-sm">Listings</span>',
            HOME_BUTTON_MAP_LINE1: '<span class="line-lg">Mapa</span>',
            HOME_BUTTON_MAP_LINE2: '<span class="line-sm">Interativo</span>',
            MORTGAGE_CALCULATOR_DISCLAIMER: 'This calculator is for demonstration purposes only and may not reflect actual numbers for your mortgage.',
            SUBDIVISION: 'Subdivisão',
            SUBMIT: 'Formulário de Envio',
            TOUCH_HERE: 'Toque Aqui'
        });
        $translateProvider.preferredLanguage('en');
    });
