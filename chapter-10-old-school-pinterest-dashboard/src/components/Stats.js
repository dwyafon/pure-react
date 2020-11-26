import React from "react";

const Stats = ({ stats }) => {
  return (
    <div className="statsRow">
      <BoardCount boardCount={stats.boardCount} />
      <PinCount pinCount={stats.pinCount} />
      <LikeCount likeCount={stats.likeCount} />
      <FollowerCount followerCount={stats.followerCount} />
      <FollowingCount followingCount={stats.followingCount} />
    </div>
  );
};

const BoardCount = ({ boardCount }) => {
  return (
    <div className="boardCount">
      <span>{boardCount}</span>
      <span>Boards</span>
    </div>
  );
};

const PinCount = ({ pinCount }) => {
    return (
        <div className="pinCount">
          <span>{pinCount}</span>
          <span>Pins</span>
        </div>
      );};
const LikeCount = ({ likeCount }) => {
    return (
        <div className="likeCount">
          <span>{likeCount}</span>
          <span>Likes</span>
        </div>
      );
};
const FollowerCount = ({ followerCount }) => {
    return (
        <div className="followerCount">
          <span>{followerCount}</span>
          <span>Followers</span>
        </div>
      );};
const FollowingCount = ({ followingCount }) => {
    return (
        <div className="followingCount">
          <span>{followingCount}</span>
          <span>Following</span>
        </div>
      );};

export default Stats;
