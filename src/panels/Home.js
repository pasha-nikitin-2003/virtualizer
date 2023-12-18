import React from "react";

import { Panel } from "@vkontakte/vkui";
import { useVirtualizer } from "@tanstack/react-virtual";
import { FriendCell } from "./FriendCell";
import { fitredFriends, friendsData } from "./config";

const Home = ({ id }) => {
  const scrollContainerRef = React.useRef(null);
  const virtualizer = useVirtualizer({
    count: fitredFriends.length,
    overscan: 5,
    estimateSize: () => fitredFriends.length,
    getScrollElement: () => scrollContainerRef.current,
  });

  return (
    <Panel style={{overflow: 'scroll', maxHeight: `${window.innerHeight}px`}} getRootRef={scrollContainerRef} id={id}>
        <div style={{background: "red", width: '100%', height: '500px'}}></div>
        <div
          style={{
            position: "relative",
            width: "600px",
            height: `${virtualizer.getTotalSize()}px`,
          }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const friendId = fitredFriends[virtualItem.index];
            const friendT = friendsData[friendId.toString()];
            const friend = {
              photo_200_orig: friendT.url,
              last_name: friendT.title,
              first_name: friendT.title,
            };

            return (
              friend && (
                <div
                  key={friendId.toString()}
                  style={{
                    position: "absolute",
                    width: "100%",
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  <FriendCell multi={true} friend={friend} isSelected={false} />
                </div>
              )
            );
          })}
        </div>
    </Panel>
  );
};

export default Home;
