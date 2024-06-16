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

export const UserList = ({ userQuery, users }: UserListProps) => {
  return (
    <ListWrapper>
      <ResultDescription>Showing users for "{userQuery}"</ResultDescription>
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
