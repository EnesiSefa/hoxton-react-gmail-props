import { Email } from "../data/emails";
import OneEmail from "./OneEmail";

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
  let emails = getFilteredEmails();
  console.log(emails[2]);

  return (
    <ul>{emails.map((email) => (<OneEmail email={email} toggleRead={toggleRead} toggleStar={toggleStar}/>))} </ul>
  );
}
// emails.map(email => <Email />)
