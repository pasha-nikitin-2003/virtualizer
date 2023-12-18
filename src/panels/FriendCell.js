import { memo } from 'react';
import { Icon24CheckCircleOff, Icon24CheckCircleOn } from '@vkontakte/icons';
import { Avatar, SimpleCell } from '@vkontakte/vkui';

const UnSelectIcon = <Icon24CheckCircleOff className={{fill: 'red'}} height={20} width={20} />;
const SelectIcon = <Icon24CheckCircleOn className={{fill: 'green'}} height={20} width={20} />;

const onItemClick = (
  friend,
  isSelected,
  friendSelectFn,
  friendUnselectFn,
  multi,
) => {
};

export const FriendCell = memo(({ multi, isSelected, friend }) => {
  return (
    <SimpleCell
      after={isSelected ? SelectIcon : UnSelectIcon}
      onClick={() => onItemClick(friend, isSelected, () => null, () => null, multi)}
    >
      <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <Avatar src={friend.photo_200_orig} size={34} />
        {friend.first_name + ' ' + friend.last_name}
      </div>
    </SimpleCell>
  );
});
