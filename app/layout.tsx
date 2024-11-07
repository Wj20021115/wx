import { getLocaleOnServer } from '@/i18n/server'
import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({ children }: { children: React.ReactNode }) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div>
        </div>
        <footer className="footer">
          <p>服务生成的所有内容均由人工智能模型生成，其生成内容的准确性和完整性无法保证，不代表我们的态度或观点</p>
          <p>内容由AI大模型生成，仅供参考，请注意甄别！</p>
        </footer>
      </body>
    </html>
  )
}

export default LocaleLayout