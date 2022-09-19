package com.devcom.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="FeedTable")
public class Feed {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int feedid;
	
	String query;
	
	@JsonFormat(pattern="dd-MM-yyyy")
	private Date feedDate;
	
	String topic;
	
	int relevance;
	
	@ManyToOne
	private Developer developer;
	
	public Feed() {
		
	}
	
	public Developer getDeveloper() {
		return developer;
	}
	public void setDeveloper(Developer developer) {
		this.developer = developer;
	}
	public int getFeedid() {
		return feedid;
	}
	public void setFeedid(int feedid) {
		this.feedid = feedid;
	}
	public Date getFeedDate() {
		return feedDate;
	}
	public void setFeedDate(Date feedDate) {
		this.feedDate = feedDate;
	}
	public String getQuery() {
		return query;
	}
	public void setQuery(String query) {
		this.query = query;
	
	}
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public int getRelevance() {
		return relevance;
	}
	public void setRelevance(int relevance) {
		this.relevance = relevance;
	}
}
