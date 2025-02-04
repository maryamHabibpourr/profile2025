import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-2 text-sx text-gray-600">
            <Link className="text-red-800 text-left font-semibold hover:text-red-600" href={`/docs/${id}`}>{title}</Link>
            <br />
            <p className="text-gray-600 text-sm font-semibold text-justify mt-1">{formattedDate}</p>
        </li>
    )
}