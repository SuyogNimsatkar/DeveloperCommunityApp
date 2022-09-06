//package com.devcom.controller;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
////import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.devcom.dto.FeedDto;
//import com.devcom.entity.Feed;
////import com.devcom.entity.Feed;
//import com.devcom.service.FeedIService;
//
//
//@RestController
//@RequestMapping("/Feed")
//public class FeedController {
//	@Autowired
//	FeedIService feedService;
//	@PostMapping("/addfeed")
//	public Feed addFeed(@RequestBody FeedDto feed)
//	{
//		return feedService.addFeed(feed);
//	}
//	@PutMapping("/editfeed/{feedid}")
//	public ResponseEntity<Feed> editFeed(@PathVariable("feedid") int feedid,@RequestBody FeedDto feed) {
//		return this.feedService.editFeed(feedid, feed);
//		
//	}
//	@DeleteMapping("/delete/{feedId}")
//	public String removeFeed(@PathVariable( "feedId") int feedId) {
//	     
//	     return feedService.removeFeed(feedId);
//	}
//	@GetMapping("/getdetails/{feedid}")
//	public Optional<Feed> getFeed(@PathVariable int feedid ) {
//		return feedService.getFeed(feedid);
//		
//	}
//
//
//}
