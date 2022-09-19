package com.devcom.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ResponseDto {

	private int respId;
	private String answer;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date respDate;

	private int devId;

	private int feedId;

	public int getFeedId() {
		return feedId;
	}

	public void setFeedId(int feedId) {
		this.feedId = feedId;
	}

	public int getDevId() {
		return devId;
	}

	public void setDevId(int devId) {
		this.devId = devId;
	}

	public int getRespId() {
		return respId;
	}

	public void setRespId(int respId) {
		this.respId = respId;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Date getRespDate() {
		return respDate;
	}

	public void setRespDate(Date respDate) {
		this.respDate = respDate;
	}

}
