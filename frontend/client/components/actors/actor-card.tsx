import Link from "next/link";
import Image from "next/image";

interface ActorCardProps {
  id: string;
  name: string;
  imageUrl?: string;
  collaborationCount?: number;
}

export default function ActorCard({
  id,
  name,
  imageUrl,
  collaborationCount,
}: ActorCardProps) {
  return (
    <Link href={`/actors/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex items-center space-x-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
          {imageUrl ? (
            <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-medium text-lg">{name}</h3>
          {collaborationCount !== undefined && (
            <p className="text-sm text-gray-600">
              {collaborationCount} collaboration
              {collaborationCount !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

