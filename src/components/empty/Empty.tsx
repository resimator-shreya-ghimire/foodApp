import { Icon } from '@/components/icon/Icon';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export const Empty = ({ message }: { message: string }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center" role="region" aria-label="Empty folder">
            <Icon icon={faFolderOpen} className="text-6xl text-gray-600" />
            <div className="mt-3 bg-white/50 rounded-md h-[calc(100%-12px)] flex items-center justify-center">
                <span className="text-gray-600 text-sm select-none">{message}</span>
            </div>
        </div>
    )
}
