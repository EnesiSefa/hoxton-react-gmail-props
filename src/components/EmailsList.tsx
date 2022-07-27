import { Email } from "../data/emails";
import ListItem from "./ListItem";

type Props = {
  getFilteredEmails: () => Email[];
  toggleRead: (targetEmail: Email) => void;
  toggleStar: (targetEmail: Email) => void;
};

export default function EmailsList({
  getFilteredEmails,
  toggleRead,
  toggleStar,
}: Props) {
  return (
    <ul>
      <ListItem getFilteredEmails={getFilteredEmails} toggleRead={toggleRead} toggleStar={toggleStar}/>
    </ul>
  );
}
