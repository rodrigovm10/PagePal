export default function PrivacyPage() {
  return (
    <main className='container mt-20 text-justify text-pretty'>
      <header className='bg-primary py-4 text-center text-white '>
        <h1 className='text-2xl font-bold'>Política de Privacidad</h1>
        <p className='text-sm'>Última actualización: 16 de febrero de 2024</p>
      </header>
      <section className='py-4'>
        <h2 className='text-lg font-semibold'>Recopilación y Uso de la Información</h2>
        <p className='mb-4'>
          Recopilamos varios tipos diferentes de información con diversas finalidades para
          proporcionar y mejorar nuestro Servicio.
        </p>
        <h3 className='text-base font-semibold'>Tipos de Datos Recopilados Datos Personales</h3>
        <p className='mb-4'>
          Al utilizar nuestro Servicio, es posible que te pidamos que nos proporciones cierta
          información de identificación personal que puede incluir, entre otros, tu nombre,
          dirección de correo electrónico, dirección postal, número de teléfono y otra información
          que se solicite.
        </p>
        <h4 className='text-sm font-semibold'>Datos Personales</h4>
        <p className='mb-4'>
          Al utilizar nuestro Servicio, es posible que te pidamos que nos proporciones cierta
          información de identificación personal que puede incluir, entre otros, tu nombre,
          dirección de correo electrónico, dirección postal, número de teléfono y otra información
          que se solicite.
        </p>
        <h4 className='text-sm font-semibold'>Datos de uso</h4>
        <p className='mb-4'>
          {`También podemos recopilar información sobre cómo se accede y utiliza el Servicio (Datos
          de Uso"). Estos Datos de Uso pueden incluir información como la dirección del Protocolo de
          Internet de tu dispositivo (por ejemplo, dirección IP), tipo de navegador, versión del
          navegador, las páginas de nuestro Servicio que visitas, la hora y la fecha de tu visita,
          el tiempo que pasas en esas páginas, identificadores únicos de dispositivo y otros datos
          de diagnóstico.`}
        </p>
      </section>
      <section className='py-4'>
        <h2 className='text-lg font-semibold'>Seguridad de los Datos</h2>
        <p className='mb-4'>
          La seguridad de tus datos es importante para nosotros, pero recuerda que ningún método de
          transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Aunque nos
          esforzamos por utilizar medios comercialmente aceptables para proteger tus Datos
          Personales, no podemos garantizar su seguridad absoluta.
        </p>
      </section>
      <section className='py-4'>
        <h2 className='text-lg font-semibold'>Enlaces a Otros Sitios Web</h2>
        <p className='mb-4'>
          Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por
          nosotros. Si haces clic en un enlace de un tercero, serás dirigido al sitio de ese
          tercero. Te recomendamos encarecidamente que revises la Política de Privacidad de cada
          sitio que visites.
        </p>
      </section>
      <section className='py-4'>
        <h2 className='text-lg font-semibold'>Cambios en esta Política de Privacidad</h2>
        <p className='mb-4'>
          Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos
          cualquier cambio publicando la nueva Política de Privacidad en esta página.
        </p>
        <p className='mb-4'>
          Te recomendamos que revises periódicamente esta Política de Privacidad para detectar
          cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se
          publican en esta página.
        </p>
      </section>
      <section className='py-4'>
        <h2 className='text-lg font-semibold'>Contacto</h2>
        <p>Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos</p>
        <p className='text-black'>Por correo electrónico: info@pagepal.com</p>
      </section>
    </main>
  )
}
