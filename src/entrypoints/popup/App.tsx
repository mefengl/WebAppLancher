import { Button } from '@/components/ui/button'
import { Icon } from '@iconify-icon/react'

function App() {
  return (
    <div className="flex min-h-screen w-96 flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-4 grid grid-cols-2 gap-4">
        <a
          className="flex size-24 flex-col items-center justify-center rounded-lg border border-gray-300 bg-white shadow-md transition hover:bg-gray-50"
          href="https://www.xiaohongshu.com/explore"
        >
          <Icon icon="simple-icons:xiaohongshu" />
          <span className="text-sm">小红书</span>
        </a>
        <a
          className="flex size-24 flex-col items-center justify-center rounded-lg border border-gray-300 bg-white shadow-md transition hover:bg-gray-50"
          href="https://www.douyin.com/follow"
        >
          <Icon icon="simple-icons:tiktok" />
          <span className="text-sm">抖音</span>
        </a>
      </div>
      <Button className="mt-4">
        打开全部
      </Button>
    </div>
  )
}

export default App
