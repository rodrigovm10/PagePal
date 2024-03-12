export const ROUTER = [
  { href: '/about-us', name: 'Sobre nosotros' },
  { href: '/membership', name: 'Membresía' },
  { href: '/auth/login', name: 'Iniciar sesión' },
  { href: '/auth/register', name: 'Registrate' }
]

export const ROUTER_FOOTER = [
  { href: '/privacy-pagepal', name: 'Políticas de privacidad' },
  { href: '/terms-pagepal', name: 'Términos y condiciones' },
  { href: '/about-us', name: 'Sobre nosotros' },
  { href: '/sitemap', name: 'Mapa del sitio' }
]

export const ROUTER_SESSION = [{ href: '/new-story', name: 'Escribir' }]
export const CATEGORIES_RECOMMENDED = ['Deportes', 'Programación', 'Motivación']

export const SCHEMAS_MESSAGES = {
  EMAIL_REQUIRED: 'Se requiere un correo electrónico.',
  PASSWORD_REQUIRED: 'Se requiere una contraseña.',
  USERNAME_REQUIRED: 'Se requiere un nombre de usuario.',
  PASSWORD_MIN: 'La contraseña debe contener al menos 8 caracteres.'
}

export const TOOLBAR = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ align: [] }],

  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],

  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image', 'video'],
  [{ color: [] }, { background: [] }],

  ['clean']
]
