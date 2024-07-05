import { Icon } from '@iconify-icon/react'

function App() {
  return (
    <div className="flex min-h-screen w-96 flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-4 grid grid-cols-2 gap-4">
        <a
          className="flex size-24 flex-col items-center justify-center rounded-lg border border-gray-300 bg-white shadow-md transition hover:bg-gray-50"
          href="https://www.xiaohongshu.com/explore"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon
            icon="simple-icons:xiaohongshu"
            width="52"
          />
        </a>
        <a
          className="flex size-24 flex-col items-center justify-center rounded-lg border border-gray-300 bg-white shadow-md transition hover:bg-gray-50"
          href="https://www.douyin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon
            icon="simple-icons:tiktok"
            width="28"
          />
        </a>
      </div>
    </div>
  )
}

export default App
