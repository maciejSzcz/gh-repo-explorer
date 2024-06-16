import UserDetails from "components/UserDetails";
import type { User } from "models/User";
import {
  List,
  ListItem,
  ListWrapper,
  ResultDescription,
} from "./UserList.styled";

interface UserListProps {
  userQuery: string;
  users?: User[];
}

interface UserListPlaceholderProps {
  text: string;
}

export const UserList = ({ userQuery, users }: UserListProps) => {
  return (
    <ListWrapper>
      <ResultDescription aria-label="resultSummary">
        {users && users?.length > 0
          ? `Showing users for ${userQuery}`
          : `No matching users for ${userQuery}`}
      </ResultDescription>
      <List aria-label="userList">
        {users?.map((user) => (
          <ListItem key={user.id} aria-label="userListItem">
            <UserDetails login={user.login} />
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  );
};

export const UserListPlaceholder = ({ text }: UserListPlaceholderProps) => (
  <ListWrapper>
    <ResultDescription aria-label="resultSummary">{text}</ResultDescription>
  </ListWrapper>
);
