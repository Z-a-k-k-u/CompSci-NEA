"use strict";
function collisionmanager(q,w,e,r) { 
  boxCollider.update(q, w, e, r, player.x, player.y, player.w, player.w);
  boxCollider.updateVector();
  boxCollider.updateMiddle();
  boxCollider.vectorCreate();
  boxCollider.detection();
}