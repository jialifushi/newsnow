import { motion } from "framer-motion"

function ThemeToggle() {
  const { isDark, toggleDark } = useDark()
  return (
    <li onClick={toggleDark}>
      <span className={$("inline-block", isDark ? "i-ph-moon-stars-duotone" : "i-ph-sun-dim-duotone")} />
      <span>
        {isDark ? "浅色模式" : "深色模式"}
      </span>
    </li>
  )
}

export function Menu() {
  const { loggedIn, login, logout, userInfo, enableLogin } = useLogin()
  const [shown, show] = useState(false)
  return (
    <span className="relative" onMouseEnter={() => show(true)} onMouseLeave={() => show(false)}>
      <span className="flex items-center scale-90">
        {
          enableLogin && loggedIn && userInfo.avatar
            ? (
                <button
                  type="button"
                  className="h-6 w-6 rounded-full bg-cover"
                  style={
                    {
                      backgroundImage: `url(${userInfo.avatar}&s=24)`,
                    }
                  }
                >
                </button>
              )
            : <button type="button" className="btn i-si:more-muted-horiz-circle-duotone" />
        }
      </span>
      {shown && (
        <div className="absolute right-0 z-99 bg-transparent pt-4 top-4">
          <motion.div
            id="dropdown-menu"
            className={$([
              "w-200px",
              "bg-primary backdrop-blur-5 bg-op-70! rounded-lg shadow-xl",
            ])}
            initial={{
              scale: 0.9,
            }}
            animate={{
              scale: 1,
            }}
          >
            <ol className="bg-base bg-op-70! backdrop-blur-md p-2 rounded-lg color-base text-base">
              {enableLogin && (loggedIn
                ? (
                    <li onClick={logout}>
                      <span className="i-ph:sign-out-duotone inline-block" />
                      <span>退出登录</span>
                    </li>
                  )
                : (
                    <li onClick={login}>
                      <span className="i-ph:sign-in-duotone inline-block" />
                      <span>Github 账号登录</span>
                    </li>
                  ))}
              <ThemeToggle />
              <li onClick={() => window.open('https://listen.789168.xyz/')}>
              <span className="i-ph:github-logo-duotone inline-block" />
              <span>Visit Music</span>
              </li>
              <li className="flex gap-2 items-center">
                <a href="https://monitor.789168.xyz/" className="inline-block">
                  <img
                    alt="不要碰我"
                    src="https://img.icons8.com/?size=100&id=T2pGOWV8jOEs&format=png&color=000000" // 自定义图片 URL
                    className="h-6" // 可选：调整图片高度
                  />
                </a>
              <span>说了不听，不要点我</span>
                <a href="https://search.789168.xyz/" className="inline-block">
                  <img
                    alt="说了不听"
                    src="https://img.icons8.com/?size=100&id=ozcvjcrhPhQT&format=png&color=000000" // 自定义图片 URL
                    className="h-6" // 可选：调整图片高度
                  />
                </a>
              </li>
            </ol>
          </motion.div>
        </div>
      )}
    </span>
  )
}
